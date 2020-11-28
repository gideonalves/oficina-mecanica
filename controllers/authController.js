const users = [{
        usuario: "gideon",
        senha: '123'
    },
    {
        usuario: "ale",
        senha: '321'
    },
]
const auth = {

    index: (req, res) => {

        res.render('index', { title: 'oficina' })
    },

    login: (req, res) => {

        const { usuario, senha } = req.body

        const authUser = users.filter(user => {
            if (user.usuario == usuario && user.senha == senha) {
                return true
            } else {
                return false
            }

        })

        if (authUser.length > 0) {
            return res.render('pages/home', { usuario: authUser[0].usuario })
        } else {
            return res.send({ msg: "Usuário ou Senha Invalido" })
        }
    }
}

module.exports = auth