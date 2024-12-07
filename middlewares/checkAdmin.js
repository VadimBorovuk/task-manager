export default async (req, res, next) => {
    try {
        if(!req.user){
            return res.status(404).json({ message: 'User not found' })
        }
        if(req.user.role !== 'admin'){
            return res.status(500).json({ message: 'User dont have permissions' })
        }

        next()
    } catch (e) {
        console.log(e)
        res.status(500).json({ message: e.message })
    }
}
