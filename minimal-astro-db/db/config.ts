import { defineDb, defineTable, column } from 'astro:db';

const Comment = defineTable({
  columns: {
    authorId: column.number(),
    body: column.text(),
  }
})

export default defineDb({
  tables: { Comment },
})