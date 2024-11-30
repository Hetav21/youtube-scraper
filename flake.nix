{
  description = "example-node-js-flake";

  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        buildNodeJs = pkgs.callPackage "${<nixpkgs>}/pkgs/development/web/nodejs/nodejs.nix" {
          python = pkgs.python3;
        };

      in rec {
        flakedPkgs = pkgs;

        # enables use of `nix shell`
        devShell = pkgs.mkShell {
          # add things you want in your shell here
          buildInputs = with pkgs; [
            nodejs
          ];
        };
      }
    );
}
