# Pack 25 Website

Source for www.pack25mahomet.com — built with [Zensical](https://zensical.org),
a static site generator. Plain Markdown files in, HTML site out. No database,
no server-side code.

## Editing content (for non-technical editors)

1. Find the page you want to change in the `docs/` folder on GitHub (or
   click the pencil icon ✏️ near the top of any live page — it jumps
   straight to editing that file on GitHub).
2. Make your edit in GitHub's built-in editor.
3. Click **Commit directly to the main branch**.
4. Wait ~1–2 minutes. The site rebuilds and deploys automatically. Check
   the **Actions** tab on GitHub if a change doesn't show up — a red X
   there means something broke and needs a technical person.

## Editing locally (for technical editors)

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
zensical serve -o   # live preview at localhost:8000, rebuilds on save
```

## A note on the toolchain (read this if something ever breaks)

This site was built in mid-2026, during a period when the MkDocs/Material
ecosystem forked into several directions after the original MkDocs project
stalled. We chose **Zensical** (built by the Material for MkDocs team) for
its long-term direction, knowing it was young (pre-1.0) at the time.

The `requirements.txt` pins an exact tested version deliberately — don't
casually run `pip install -U`.

**If Zensical ever stalls or breaks in a way that can't be fixed:** this
site is just standard Markdown + a `mkdocs.yml` config, which is a widely
supported format. It can be rebuilt with minimal changes using:
- **MkDocs 1.x + Material for MkDocs** (the original, stable, long-proven
  stack this project is compatible with), or
- **ProperDocs + MaterialX** (community forks aiming to be drop-in
  replacements for the above)

Any of these read the same `mkdocs.yml` and `docs/*.md` files with little
to no changes needed. Swapping the toolchain does not mean rewriting the
content.
