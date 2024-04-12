const School = require('./../models/school');

exports.addSchool = async (req, res, next) => {
    try{

        console.log(req.query);

        const data = req.body;
    
        const category = await School.create(data)
    
        res.status(201).json({
            message: 'We recieved your request to create a school',
            data: category
        })
    }catch(err){
        
        res.status(500).json({
        message: err
        })
      
    }
}

exports.getAllSchools = async (req, res, next) => {
    try{

        const schools = await School.find({});
    
        res.status(200).json({
            message: 'Success',
            results: schools.length,
            data: schools

        })
    }catch(err){
        res.status(500).json({
            message: 'Something went wrong',            
        })
    }
    // getAllCategories()

}

exports.getSchool = async (req, res, next) => {
    try{
        const schoolId = req.params.id

        const category = await School.findOne({name: schoolId})
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

exports.updateSchool = async (req, res, next) => {
    try{
      const updateId = req.params.id
    
      const update = await School.findByIdAndUpdate(updateId, req.body, {
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

    exports.deleteSchool = async (req, res, next) =>{
        try{
    
            await School.findByIdAndDelete(req.params.id)
    
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



