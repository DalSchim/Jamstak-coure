/**
 * club controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::club.club', ({strapi}) => ({
  async findOne(ctx) {
    const {id} = ctx.params
    const entity = await strapi.db.query('api::club.club').findOne({
      where: {slug: id},
      populate: ['image', 'rameurs']
    })
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
    return this.transformResponse(sanitizedEntity)
  }
}))

