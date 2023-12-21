import { prisma } from "../index";

export async function createArticle(article: any, tags: string[]) {
  return prisma.$transaction(async (tx) => {
    const tagsId = [];
    for (const tag of tags) {
      const tagData = await prisma.tag.findFirst({ where: { name: tag } });
      if (tagData !== null) {
        tagsId.push(tagData.id);
      } else {
        const newTag = await prisma.tag.create({ data: { name: tag } });
        tagsId.push(newTag.id);
      }
    }

    const newArticle = await tx.article.create({
      data: {
        title: article.title,
        content: article.content,
        coverImg: article.coverImg,
        categoryId: article.categoryId,
      },
    });

    await tx.mapArticlesTags.createMany({
      data: tagsId.map((tagId) => ({
        articleId: newArticle.id,
        tagId,
      })),
    });

    return newArticle;
  });
}

export async function getArticleDetail(id: number) {
  return prisma.article.findUnique({
    where: { id },
    include: {
      Category: true,
      MapArticlesTags: {
        include: {
          Tag: true,
        },
      },
    },
  });
}
