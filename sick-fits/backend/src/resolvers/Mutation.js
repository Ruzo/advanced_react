const Mutations = {
  createCat(parent, args, ctx, info) {
    global.cats = global.cats || [];
    global.cats.push({ name: args.name });
    return { name: args.name };
  },
};

module.exports = Mutations;
