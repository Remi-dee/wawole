const HomeTour = require('../models/homeTourModel');
const Home = require('../models/homeModel');
const catchAsync = require('../utils/catchAsync');
const handlerFactory = require('./handlerFactory');
const AppError = require('../utils/appError');

//exports.createHomeTour = handlerFactory.createOne(HomeTour);
exports.getAllHomeTour = handlerFactory.getAll(HomeTour);
exports.getHomeTour = handlerFactory.getOne(HomeTour);
exports.updateHomeTour = handlerFactory.updateOne(HomeTour);
exports.deleteHomeTour = handlerFactory.deleteOne(HomeTour);

exports.createHomeTour = catchAsync(async (req, res, next) => {
    const home =  await Home.findById(req.body.homeId);
       if(!home) {
         return next(new AppError(`No home with id : ${req.body.homeId}`, 400));
       }
  
   //req.body.requestDetails = ValidationDetails.id;
   const doc = await Request.create(req.body)
   
   res.status(201).json({
     status: 'success',
     data: {
       data: doc,
     },
   });
  });