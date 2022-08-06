import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Categories')
        .child(S.documentTypeList('category').title('Categories')),
    ]);