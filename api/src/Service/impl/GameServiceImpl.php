<?php
namespace Daw\Service\impl;
use Daw\DAO\GamesDAO;
use Daw\DAO\impl\EloquentGameDAO;
use Daw\DTO\GamesDTO;
use Daw\Service\GameService;

class GameServiceImpl implements GameService{
private GamesDAO $gameDAO;
    function __construct()
    {
        $this->gameDAO = new EloquentGameDAO();
    }

	/**
	 * @return array
	 */
	public function all(): array {
        return $this->gameDAO->all();
	}

	/**
	 *
	 * @param mixed $id
	 * @return \Daw\DTO\GamesDTO
	 */
	public function find($id):GamesDTO {
        return $this->gameDAO->find($id);
	}

	/**
	 *
	 * @param mixed $id
	 * @return array
	 */
	public function developGames($id): array {
        return $this->gameDAO->developGames($id);
	}

	/**
	 *
	 * @param \Daw\DTO\GamesDTO $game
	 * @return bool
	 */
	public function insert(GamesDTO $game): bool {
        return $this->gameDAO->insert($game);
	}

	/**
	 *
	 * @param \Daw\DTO\GamesDTO $request
	 * @param mixed $id
	 * @return bool
	 */
	public function update(GamesDTO $request, $id): bool {
        return $this->gameDAO->update($request,$id);
	}

	/**
	 *
	 * @param mixed $id
	 * @return bool
	 */
	public function delete($id): bool {
        return $this->gameDAO->delete($id);
	}

}
