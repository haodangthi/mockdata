import {EntityMetadataMap } from '@ngrx/data'

const entityMetadata: EntityMetadataMap={
    Todo:{}
}
const pluralNames = { Todos: 'Todos' };
export const entityConfig={
    entityMetadata,
    pluralNames
}