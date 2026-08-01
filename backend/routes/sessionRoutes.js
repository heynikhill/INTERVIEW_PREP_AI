const espress =requrie(express);
const {createSeeion, getSessionById, getMySessions, deleteSession}=require('../controllers/sessionController');
const {protect} =require('../middlewares/authMiddleware');

const router =express.Router();

router.post('/create',protect,createSeeion);
router.get('/my-sessions',protect,getMySession);
router.get('./:id', ptotect, getSessionById);
router.delete('./:id',protect,deleteSession);

module.exports=router;