import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//ahora sigue crearse los métodos de manera genérica: 
const createMethod = async (req: Request, res: Response) => {
    try {
         const result = await prisma.customers.create({data: req.body})
         return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.customers.update({where: {id: id},data: req.body});
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMethod = async (req: Request, res: Response) => {
    
    try {
        const result = await prisma.customers.findMany();
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

const getByIdMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.customers.findUnique({where: {id: id}})
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.customers.delete({where: {id: id}})
        return res.status(200).json(result)
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

export {
    createMethod,
    updateMethod,
    getMethod,
    getByIdMethod,
    deleteMethod
}