<?php
namespace Daw\DAO;


use Daw\DTO\NewsletterDTO;
use Illuminate\Http\Request;


interface NewsletterDAO
{
    // public function all(): array;
    // public function find($id): NewsletterDTO;
    public function insert(NewsletterDTO $newsletter): bool;
    // public function update(NewsletterDTO $request, $id): bool;
    // public function delete($id): bool;
}
