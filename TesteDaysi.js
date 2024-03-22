import { Response, Request } from 'express' // Express: framework para requisições http
import prisma from '../../../database' // Prisma: ORM para gerenciar o banco de dados

export default class DeparmentsControllers { // Por padrão vai ser importado DeparmentsControler
    public async create(req: Request, res: Response): Promise<Response> { // É um método assincrono, que retorna obrigatoriamente uma promessa do tipo response
        return res.send() // retorna o método send(), que é um método que retorna uma resposta para o cliente
    }
    public async list(req: Request, res: Response): Promise<Response> { // É um método assincrono, que retorna obrigatoriamente uma promessa do tipo response em formato json
        const departments = await prisma.department.findMany({}); // É um método assincono, que busca todos os departamentos no banco de dados e insere na variavel departaments, com o await, ele só passa para a próxima linha quando finalizar o comando
        return res.json({ departments }) // retorna o método json(), que é um método que retorna uma resposta para o cliente em formato json
    }
    public async listDepartmentByName(req: Request, res: Response): Promise<Response> { // É um método assincrono, que retorna obrigatoriamente uma promessa do tipo response em formato json
        const departments = await prisma.department.findMany({
            select: {
                name: true,
            },
        });
        if (!departments) {
        }
        return res.json([]);
        const names = departments.map((department: { name: string; }) => department.name) 
    }
return res.json({ names })




// Outro arquivo 
import { Router } from 'express'  // importa rotas do express (framework)
// A classe Router fornecida pelo Express.js é uma ferramenta poderosa para gerenciar rotas em sua aplicação web. Ela permite definir diferentes caminhos (URLs) dentro de sua aplicação e associá-los a funções específicas que lidam com solicitações recebidas.
import DepartmentsController from '../controllers/DeparmentsController'
const departmentsRouter = Router() // cria uma instancia do Router()
const departments = new DepartmentsController() // cria uma instancia do DepartmentsController()

departments Router.get('/', departments.list) //Quando estiver no index, vai executar a função departaments tipo list, define o caminho '/' para a função list() da classe DepartmentsController()

departments Router.get('/names', departments.listDepartmentByName) // Quando estiver no endpoint/names, define o caminho '/names' para a função listDepartmentByName() da classe DepartmentsController()
export default departments Router // exporta a instancia do Router()


import { Router }
const departmentsController = new DepartmentsController();
departments Router.get('/', departmentsController.list)
departments Router.get('/names', departmentsController.listDepartmentByName)
export default departments Router