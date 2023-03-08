const Book = require ("./module");

const getAllBooks = async (req, res) => {

    try {

    const read = await Book.findAll();

    res.status(201).json({
        message: "success",
        read: read,
    });

    } catch (er) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}

const getSingleBookByTitle = async (req, res) => {

    try {
        const read = await Book.findOne( {
            where: { title: req.params.title }
        });

        res.status(201).json({
            message: "success",
            book: read,
        });
        
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });

    }
}

const getAllBooksByGenre = async (req, res) => {

    try {

    const read = await Book.findAll({
        where: {
            genre: req.body.genre,
        }
    });

    res.status(201).json({
        message: "success",
        read: read,
    });

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}

const updateBook = async (req, res) => {
    console.log(req.body);
    try {
        
        const updateBook = await Book.update({ 
            // genre: req.body.newGenre 

            [req.body.updateKey]: req.body.updateValue },             
            { where: { title: req.body.title }            

        })
        console.log(updateBook);

        res.status(201).json({
            message: "success",
            updateBook: updateBook,
        });

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}

const addBook = async (req, res) => {
    try {

            const book = await Book.create(req.body);
            console.log(book);

            res.status(201).json({ message: "success", newBook: book});


    } catch (error) {
        console.log(error);

        res.status(501).json({ errorMessage: error.message, error: error });
    }    
}

const deleteAllBooks = async (req, res) => {

    try {

    const deleteAll = await Book.destroy();

    res.status(201).json({
        message: "success",
        deleteAll: deleteAll,
    });

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}

const deleteBook = async (req, res) => {

    try {

    const deleteBook = await Book.destroy( {
        where: { title: req.body.title }
    });

    res.status(201).json({
        message: "success",
        deleteBook: deleteBook,
    });

    } catch (er) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}

module.exports = {
    addBook,
    getAllBooks,
    getAllBooksByGenre,
    getSingleBookByTitle,
    updateBook,
    deleteAllBooks,
    deleteBook,
}