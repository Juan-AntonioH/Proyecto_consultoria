<?php
namespace Daw\Service;


use Daw\DTO\GamesDTO;
use Illuminate\Http\Request;


interface GameService
{
    public function all(): array;
    public function find($id): GamesDTO;
    public function developGames($id): array;
    public function insert(GamesDTO $game): bool;
    public function update(GamesDTO $request, $id): bool;
    public function delete($id): bool;
}
