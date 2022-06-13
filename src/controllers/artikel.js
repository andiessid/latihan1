exports.artikelVar = (req, res, next) => {
    res.json({
        message : "get berhasil!",
        data : [
                    {
                        nama : "andis",
                        alamat : "cianjur",
                        umur : 45,
                        hobi : "musik"
                    },
                    {
                        nama : "andika",
                        alamat : "bandung",
                        umur : 16,
                        hobi : "olahraga"
                    }
                ]
    })
    next()
}

exports.artikelPost = (req, res, next) => {
    const varNama = req.body.nama
    const varAlamat = req.body.alamat
    const varUmur = req.body.umur
    const varHobi = req.body.hobi
    res.json({
        message : "post berhasil!",
        data : {
            nama : varNama,
            alamat : varAlamat,
            umur : varUmur,
            hobi : varHobi
        }
    })
    next()
}