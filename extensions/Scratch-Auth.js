// Name: Scratch Auth
// Description: Get a user's scratch name to prove they are a real scratch user.
// ID: samuelloufscratchauth
// Original: PenguinMod <https://penguinmod.site/>

(function (Scratch) {
  "use strict";

  const icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNTkuODg4MzciIGhlaWdodD0iMzU5Ljg4ODM3IiB2aWV3Qm94PSIwLDAsMzU5Ljg4ODM3LDM1OS44ODgzNyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDU1ODEsLTAuMDU1ODEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLjA1NTgxLDE4MGMwLC05OS4zODA0MyA4MC41NjM3NiwtMTc5Ljk0NDE5IDE3OS45NDQxOSwtMTc5Ljk0NDE5Yzk5LjM4MDQzLDAgMTc5Ljk0NDE5LDgwLjU2Mzc2IDE3OS45NDQxOSwxNzkuOTQ0MTljMCw5OS4zODA0MyAtODAuNTYzNzYsMTc5Ljk0NDE5IC0xNzkuOTQ0MTksMTc5Ljk0NDE5Yy05OS4zODA0MywwIC0xNzkuOTQ0MTksLTgwLjU2Mzc2IC0xNzkuOTQ0MTksLTE3OS45NDQxOXoiIGZpbGw9IiNmZmEwMWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI4Ny43NTE3OCwxOTMuOTAzOTJjMCw0OC43MzkxMyAtMzkuMjQxMzIsODguMjUgLTEwNy43NSw4OC4yNWMtNjguMDA4NjgsMCAtMTA3Ljc1LC0zOS41MTA4NyAtMTA3Ljc1LC04OC4yNWMwLC05LjE5MDg0IC0wLjIzMTIyLC0xOS4xOTU3NiAzLjAzODI3LC0yNy43NTgwN2M1LjIwNzY0LC0xMy42Mzc5OSA4LjkxMjAzLC03NC42MDAwOCAyMC40NjE3OCwtODYuNTA3OWM4Ljg2Mzg3LC05LjEzODY2IDI5Ljc5MTQsMzAuNjM4MTggNDMuOTQ5NzcsMjUuNTc0NzRjMTIuNjU3NTUsLTQuNTI2NyAyNS40NDQ2NiwtNC41NTg3NiAzOS44MDAxNywtNC41NTg3NmMxMy4wODE0OSwwIDI2LjU0NjAzLDIuMTAyNTggMzguMDMyNzIsNS45MDEwN2MxMC41MDM3OSwzLjQ3MzQ2IDM4LjkwMjM3LC0zMy43MjE1IDQ0LjI4MjQyLC0yOC4xMzYyN2MxNC42MDcxNSwxNS4xNjQyMSAxNi42NDA2LDY5LjQxMTk3IDIyLjUyNTM5LDg4Ljc4MzY1YzIuMjI3NDQsNy4zMzIzMyAzLjQwOTQ3LDE4Ljk1MDg0IDMuNDA5NDcsMjYuNzAxNTZ6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMjUiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxNzkuOTQ0MTg2MDQ2NTExNjI6MTc5Ljk0NDE4NjA0NjUxMTYyLS0+";
    
  class ScratchAuth {
    getInfo() {
      return {
        id: "samuelloufscratchauth",
        name: "Scratch Auth",
        color1: "#ffa01c",
        menuIconURI: icon,
        blocks: [
          // Blocks
        ]
      };
    }
    // Functions
  }

  Scratch.extensions.register(new ScratchAuth());
})(Scratch);
