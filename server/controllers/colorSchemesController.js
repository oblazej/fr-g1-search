const ColorScheme = require("../model/ColorScheme");

const createNewColorScheme = async (req, res) => {
    const { name, creator, primaryColors, secondaryColors, tertiaryColors, primaryRanges, secondaryRanges, tertiaryRanges, elements } = req.body;

    if (!name || !creator) return res.status(400).json({ "message": "Scheme name and creator name are required" });

    if (primaryColors.length === 0 && secondaryColors.length === 0 && tertiaryColors.length === 0 && primaryRanges.length === 0 && secondaryRanges.length === 0 && tertiaryRanges.length === 0) return res.status(400).json({ "message": "No colors were selected" })

    try {
        let latestId = await ColorScheme.findOne().sort({"_id": -1}).limit(1);

        const result = await ColorScheme.create({
            "id": latestId.id === null ? 0 : latestId.id + 1,
            "name": name,
            "creator": creator,
            "primaryColors": combineRangesAndColors(parseData(primaryColors), parseRanges(primaryRanges)),
            "secondaryColors": combineRangesAndColors(parseData(secondaryColors), parseRanges(secondaryRanges)),
            "tertiaryColors": combineRangesAndColors(parseData(tertiaryColors), parseRanges(tertiaryRanges)),
            "elements": parseData(elements)
        });

        console.log(result);
        res.status(201).json({ "success": `New scheme ${name} was created!` })

    } catch (err) {
        res.status(500).json({ "message": err.message });
    }

};

const searchColorScheme = async (req, res) => {
    const { primaryColor, secondaryColor, tertiaryColor, element } = req.params;
    let query = await ColorScheme.find({
        $and: [
            { $or: [{ primaryColors: parseInt(primaryColor) }, { primaryColors: { $size: 0 } }] },
            { $or: [{ secondaryColors: parseInt(secondaryColor) }, { secondaryColors: { $size: 0 } }] },
            { $or: [{ tertiaryColors: parseInt(tertiaryColor) }, { tertiaryColors: { $size: 0 } }] },
            { $or: [{ elements: parseInt(element) }, { elements: { $size: 0 } }] }]
    }).exec();
    console.log(query);
    res.json({ "message": query });
}

const getAllColorSchemes = async (req, res) => {
    const schemes = await ColorScheme.find().sort({_id: -1});
    if(!schemes) return res.status(204).json({"message": "No schemes found."});
    console.log(schemes);
    res.json(schemes);
}

const getColorScheme = async (req, res) => {
    const scheme = await ColorScheme.find({id: parseInt(req.params.id)});
    if(!scheme) return res.status(204).json({"message": "No schemes found."});
    console.log(scheme);
    res.json(scheme);
}

const countRange = (startAt = 0, size) => {
    return [...Array(size).keys()].map(i => i + startAt);
};

const parseData = (data) => {
    return data.map((color) => parseInt(color));
};

const parseRanges = (ranges) => {
    return ranges.map((range) => range.split("-").map((color) => parseInt(color)));
};

const combineRangesAndColors = (colors, ranges) => {
    let combined = new Set();
    let fullRange = ranges.map((range) => {
        let difference = Math.abs(range[0] - range[1]);
        let startAt = range[0] < range[1] ? range[0] : range[1];
        let size = difference + 1;
        if (difference <= 88) {
            return countRange(startAt, size);
        } else {
            startAt = range[0] > range[1] ? range[0] : range[1];
            size = 177 - startAt;
            let firstPart = countRange(startAt, size);
            size = (range[0] < range[1] ? range[0] : range[1]) + 1;
            let secondPart = countRange(0, size);
            return firstPart.concat(secondPart);
        }
    });
    fullRange.forEach((range) => range.forEach((color) => combined.add(color)))
    colors.forEach((color) => combined.add(color));
    return [...combined].sort((a, b) => a - b);
};

module.exports = { createNewColorScheme, searchColorScheme, getAllColorSchemes, getColorScheme };