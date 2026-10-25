<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use TanStack file routes with shared navigation in the root and reusable presentation components; this keeps all content URLs directly accessible.
- Keep editable service, project, article, and site content in browser-safe data modules; this supports future CMS replacement without rewriting layouts.
- Validate enquiries with the shared Zod schema and save them only through a server function to a private Cloud table; this protects visitor data from public reads.
- Use pageHead on every content leaf and exclude draft articles/legal drafts from the sitemap; this keeps metadata distinct and unreviewed content out of search.
