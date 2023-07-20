<?php
namespace Daw\DAO\impl;

use App\Models\Game;
use Daw\DAO\GamesDAO;
use Daw\DTO\GamesDTO;
use App\Models\Develop;

class EloquentGameDAO implements GamesDAO
{

	/**
	 * @return array
	 */
	public function all(): array {
        $games =  Game::get()->toArray();
        $resultado = [];
        foreach ($games as $game) {
            $resultado[] = new GamesDTO(
                $game["id"],
                $game["title"],
                $game["year"],
                $game["develop_id"]
            );
        }
        return $resultado;
	}

	/**
	 *
	 * @param mixed $id
	 * @return \Daw\DTO\GamesDTO
	 */
	public function find($id):GamesDTO {
        $game = Game::findOrFail($id);
        $juego = new GamesDTO($game->id,$game->title,$game->year,$game->develop_id);
        return $juego;
	}

	/**
	 *
	 * @param mixed $id
	 * @return array
	 */
	public function developGames($id): array {
        $games =  Develop::findOrFail($id)->game;
        $resultado = [];
        foreach ($games as $game) {
            $resultado[] = new GamesDTO(
                $game->id,
                $game->title,
                $game->year,
                $game->develop_id
            );
        }
        return $resultado;
	}

	/**
	 *
	 * @param \Daw\DTO\GamesDTO $game
	 * @return bool
	 */
	public function insert(GamesDTO $games): bool {
        $develop = Develop::findOrFail($games->develop_id());
        $game = new Game();
        $game->title = $games->title();
        $game->year = $games->year();
        // $game->director_id = $games->director_id();
        $game->develop()->associate($develop);
        return $game->save();
	}

	/**
	 *
	 * @param \Daw\DTO\GamesDTO $request
	 * @param mixed $id
	 * @return \Daw\DTO\GamesDTO
	 */
	public function update(GamesDTO $request, $id): bool{
        $game = Game::findOrFail($id);
        $game->title = $request->title();
        $game->year = $request->year();
        $game->develop_id = $request->develop_id();
        // $game->save();
        return $game->update();
	}

	/**
	 *
	 * @param mixed $id
	 * @return bool
	 */
	public function delete($id): bool {
        return Game::destroy($id);
	}
}
