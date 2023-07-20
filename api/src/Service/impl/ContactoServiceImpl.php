<?php

namespace Daw\Service\impl;

use Daw\DAO\ContactosDAO;
use Daw\DAO\impl\EloquentContactoDAO;
use Daw\DTO\ContactosDTO;
use Daw\Service\ContactoService;

class ContactoServiceImpl implements ContactoService
{
    private ContactosDAO $contactoDAO;
    public function __construct()
    {
        $this->contactoDAO = new EloquentContactoDAO();
    }
    public function insert(ContactosDTO $contacto): bool
    {
        return $this->contactoDAO->insert($contacto);
    }
}
