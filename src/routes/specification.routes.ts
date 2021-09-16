import { Router } from 'express'
import { createSpecificationController } from '../module/cars/useCases/createSpecification'

const specificationRoutes = Router()

specificationRoutes.post("/", (req, res) => {
    return createSpecificationController.handle(req, res)
})

export { specificationRoutes }