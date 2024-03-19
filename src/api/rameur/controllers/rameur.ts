/**
 * rameur controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::rameur.rameur', ({strapi}) => ({
  async findOne(ctx) {
    const {id} = ctx.params
    const entity = await strapi.db.query('api::rameur.rameur').findOne({
      where: {slug: id},
      populate: ['image', 'club']
    })
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanitizedEntity)
  }
  })
)
