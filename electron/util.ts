import { PrismaClient } from '@prisma/client'
import { dbPath } from './pathe'

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: `file:${dbPath}`
        }
    }
})

export async function insert(data: any[]) {
    const user = await prisma.user.create({
        data: {
            name: data[0],
            email: data[1],
        },
    })
    return user
}

export async function query() {
    const user = await prisma.user.findMany()
    return user
}
