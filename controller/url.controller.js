const Url = require("../models/Url");
const shortId = require("shortid");
const Visitors = require("../models/Visitors")
const UAParser = require('ua-parser-js');

exports.shortUrl = async (req, res) =>{
    const originalUrl = req.body.originalUrl;
    let code = req.body.code;

    if(code == "") {
        code = shortId.generate();
    }
    else
    {
        const existingCode = await Url.findOne({code});
        if(existingCode) return res.status(400).json("Code Already in use")
    }
    
    try {
        const newUrl = new Url({
            originalUrl,
            code,
        })
        await newUrl.save();

        return res.status(200).json(`${req.protocol}://localhost:3000/${code}`);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server Error");
    }
}

exports.getShortUrl = async(req, res) =>{

    const tinyUrl = req.params.tinyUrl;
    
    try {
        const existingCode = await Url.findOne({code: tinyUrl});
        if(!existingCode) return res.status(404).json("URL not Found");
        
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const newipAddress = ipAddress.replace(/^::ffff:/, '');
        
        const userAgent = req.headers['user-agent'];
    
        const parser = new UAParser();
        parser.setUA(userAgent);
        const deviceType = parser.getDevice().type || 'unknown';

        const urlVisitor = new Visitors({
            ipAddress: newipAddress,
            deviceType: deviceType,
            urlId: existingCode._id,
            userAgent: userAgent,
        })

        await urlVisitor.save();

        return res.redirect(existingCode.originalUrl);

    } catch (error) {
        console.log(error);
        return res.status(500).json("Internal Server Error");
    }    
}