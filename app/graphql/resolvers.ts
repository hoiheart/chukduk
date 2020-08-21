const Query = {
  getCommunityList (_parent, _args, _context, _info) {
    return { id: String(1), name: 'John Smith', status: 'cached' }
  }
}

export default { Query }
