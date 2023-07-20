<?php

namespace Daw\DAO\impl;

use App\Models\Contacto;
use Daw\DAO\ContactosDAO;
use Daw\DTO\ContactosDTO;

class EloquentContactoDAO implements ContactosDAO
{


    /**
     *
     * @param \Daw\DTO\ContactosDTO $contactos
     * @return bool
     */
    public function insert(ContactosDTO $contactos): bool
    {
        $contacto = new Contacto();

        $contacto->nombre = $contactos->nombre();
        $contacto->email = $contactos->email();
        $contacto->movil = $contactos->movil();
        $contacto->empresa =$contactos->empresa();
        $contacto->mensaje = $contactos->mensaje();

        return $contacto->save();
    }
}
