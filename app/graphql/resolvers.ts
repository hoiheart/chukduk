import type { QueryResolvers } from './type-defs.graphqls'
import { ResolverContext } from './apollo'

const Query: Required<QueryResolvers<ResolverContext>> = {
  getCommunityList (_parent, _args, _context, _info) {
    return { id: String(1), name: 'John Smith', status: 'cached' }
  }
}

export default { Query }
