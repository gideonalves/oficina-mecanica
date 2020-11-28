const user = [{
        usuario: "gideon",
        senha: '123'
    },
    {
        usuario: "Ale",
        senha: '321'
    },
]
const auth = {

    index: (req, res) => {

        res.render('index', { title: 'oficina' })
    },

    login: (req, res) => {

        const { usuario, senha } = req.body

        user.forEach(u => {
            if (u.usuario != 'ale') {
                return res.send({ msg: 'Usuário po senha invalido' })
            }
            if (u.senha != senha) {
                return res.send({ msg: 'Usuário po senha invalido' })
            }
            const usuario = {
                nome: u.usuario
            }
            return res.render('pages/home', usuario)
        })


    }
}

module.exports = auth