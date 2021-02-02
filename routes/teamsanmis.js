var express = require('express');
var router = express.Router();


// Require our controllers.
var teamsanmi_controller = require('../controllers/teamsanmiController'); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/create
router.post('/create', teamsanmi_controller.create_post); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/destroy
router.get('/:user_id/destroy', teamsanmi_controller.delete_user_get); 

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamsanmis/create
router.post('/:user_id/teamsanmis/create', teamsanmi_controller.create_teamsanmi_post);

// https://6bd9bf9ce60b47a6aa8de56ca048a9a5.vfs.cloud9.us-east-1.amazonaws.com/:user_id/teamsanmis/:teamsanmi_id/destroy
router.get('/:user_id/teamsanmis/:timesheet_id/destroy', teamsanmi_controller.delete_user_teamsanmi_get);

module.exports = router;