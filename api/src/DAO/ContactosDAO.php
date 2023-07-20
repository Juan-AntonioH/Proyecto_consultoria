<?php
namespace Daw\DAO;

use Daw\DTO\ContactosDTO;
use Illuminate\Http\Request;


interface ContactosDAO
{
    // public function all(): array;
    // public function find($id): ContactosDTO;
    public function insert(ContactosDTO $contacto): bool;
    // public function update(ContactosDTO $request, $id): bool;
    // public function delete($id): bool;
}
