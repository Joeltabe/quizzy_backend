const Department = require('./../models/Departments')

exports.addDepartment= async (req, res, next) => {
    try{

        console.log(req.query);

        const data = req.body;
    
        const category = await Department.create(data)
    
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

exports.getAllDepartments = async (req, res, next) => {
    try{

        const Departments = await Department.find({});
    
        res.status(200).json({
            message: 'Success',
            results: Departments.length,
            data: Departments

        })
    }catch(err){
        res.status(500).json({
            message: 'Something went wrong',            
        })
    }
    // getAllCategories()

}

exports.getDepartment = async (req, res, next) => {
    try{
        const DepartmentId = req.params.id

        const category = await Department.findOne({name: schoolId})
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

exports.updateDepartment = async (req, res, next) => {
    try{
      const updateId = req.params.id
    
      const update = await Department.findByIdAndUpdate(updateId, req.body, {
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

    exports.deleteDepartment = async (req, res, next) =>{
        try{
    
            await Department.findByIdAndDelete(req.params.id)
    
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