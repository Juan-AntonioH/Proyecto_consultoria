<?php
namespace Daw\Service;


use Daw\DTO\ContactosDTO;
use Illuminate\Http\Request;


interface ContactoService
{
    // public function all(): array;
    // public function find($id): ContactosDTO;
    public function insert(ContactosDTO $contacto): bool;
    // public function update(ContactosDTO $request, $id): bool;
    // public function delete($id): bool;
}
