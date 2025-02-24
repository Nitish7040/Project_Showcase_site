import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      s.documentTypeListItem('project').title('Project'),
      s.documentTypeListItem('author').title('Author'),

    ])
