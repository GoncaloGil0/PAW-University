const { prisma } = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const books = await prisma.books.findMany();

            if (!books) {
                return response.status(404).send("No books have yet been added to the platform!");
            }

            return response.status(200).render('bookView', { books })
        } catch (error) {
            next(error);
        }
    },

    async search(request, response, next) {
        try {
            const { author, title, isbn } = request.body;
            
            const books = await prisma.books.findMany({
                where: {
                    author: author != null ? author : undefined,
                    title: title != null ? title : undefined,
                    isbn: isbn != null ? isbn : undefined,
                }
            });

            if (!books) {
                return response.status(404).send("Book not found!");
            }

            return response.status(200).render('bookView', { books })

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const { employee_id,
                title,
                author,
                bar_code,
                price,
                units_stock,
                isbn,
                state } = request.body;

            await prisma.books.create({
                data: {
                    employee:{
                        connect:{
                            id: employee_id
                        }
                    },
                    units_stock,
                    title,
                    author,
                    bar_code,
                    isbn,
                    price,
                    state
                }
            })

            return response.status(201).send("Book created successfully");
        } catch (error) {
            next(error)
        }
    },

    async update(request, response, next) {
        try {
            const { id } = request.params;
            const { title,
                author,
                bar_code,
                price,
                state } = request.body;

            const book = await prisma.books.findUnique({
                where: {
                    id
                }
            })

            if (!book) {
                return response.status(200).send("Book not found!");
            }

            await prisma.books.update({
                where: {
                    id
                },
                data: {
                    title,
                    author,
                    bar_code,
                    price,
                    state
                }
            })

            return response.status(200).send("Book updated successfuly!");
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            const book = await prisma.books.findUnique({
                where: {
                    id
                }
            })

            if (!book) {
                return response.status(200).send("Book not found!");
            }

            await prisma.books.delete({
                where: {
                    id
                }
            });


            return response.status(200).send("Book removed successfuly!");
        } catch (error) {
            next(error);
        }
    }
}