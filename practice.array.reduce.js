//
function popularPostsIds(posts, minimalComentsQty) {
  return posts.reduce(
    (postsIds, post) =>
      post.comments >= minimalComentsQty
        ? postsIds.concat([post.postId])
        : postsIds,
    []
  );
}
const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
];

console.log(popularPostsIds(inputPosts, 10)); // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)); // [3421]

console.log(popularPostsIds(inputPosts, 50)); // []

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
];

const quantitiesByCategories = (products) => {
  return products.reduce((acc, { category, quantity }) => {
    acc[category] = (acc[category] || 0) + quantity;
    return acc;
  }, {});
};

console.log(quantitiesByCategories(inputProducts));
