const VideoCategory = require('./../models/videoCategory');


exports.addCategory = async (req, res, next) => {
    try{

        console.log(req.query);

        const {categoryId, name} = req.body;
    
        const category = await VideoCategory.create({categoryId, name})
    
        res.status(201).json({
            message: 'We recieved your request to create a category',
            data: category
        })
    }catch(err){
        
        res.status(500).json({
        message: err
        })
      
    }
}

exports.getAllCategories = async (req, res, next) => {
    try{

        const categories = await VideoCategory.find({});
    
        res.status(200).json({
            message: 'Success',
            results: categories.length,
            data: categories

        })
    }catch(err){
        res.status(500).json({
            message: 'Something went wrong',            
        })
    }
    // getAllCategories()

}

exports.getCategory = async (req, res, next) => {
    try{
        const categoryId = req.params.id

        const category = await VideoCategory.findOne({name: categoryId})
        // await VideoCategory.findOne({_id: req.params.id})
        // const category = await VideoCategory.findById(categoryId);

        if(!category) throw ((() =>{
            console.log('no such file found')
        }));

        res.status(200).json({
            message: 'success',
            data: category
        })

    }catch(err){
        res.status(500).json({
            message: 'Failed',
            error: 'Something went wrong',
            err
        })
    }
}



exports.updateCategory = async (req, res, next) => {
try{
  const updateId = req.params.id

  const update = await VideoCategory.findByIdAndUpdate(updateId, req.body, {
      new : true,
      runValidators: true
      
    });

    res.status(200).json({
        message: 'success',
        data: update
    });

}catch(err) {
    res.status(404).json({
        status : 'fail',
        message : err
    })
}
}


exports.deleteCategory = async (req, res, next) =>{
    try{

        await VideoCategory.findByIdAndDelete(req.params.id)

        res.status(204).json({
            status: 'success',
            data: null
        })

        }catch(err){
            res.status(500).json({
                status: 'fail',
                message: err
            })
    }
}

//to save the document thatbwas entered in the videocategory


