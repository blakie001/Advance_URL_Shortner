const Url = require("../models/Url");
const Visitors = require("../models/Visitors");

exports.getVisitors = async(req, res) =>{
    
    try {        
        const existingUrl = await Url.findOne({code: req.params.code});
        if(!existingUrl) return res.status(404).json("Url Not Found");

        const visitorDetail = await Visitors.find({urlId: existingUrl._id});
        const uniqueVisitorSet = new Set();
        for(let i=0; i<visitorDetail.length; i++)
        {
            uniqueVisitorSet.add(visitorDetail[i].ipAddress)
        }
        return res.status(200).json({
            originalUrl: existingUrl.originalUrl,
            totalVisits: visitorDetail.length,
            uniqueVisitor: uniqueVisitorSet.size,

        })

    } catch (error) {
        
    }
}