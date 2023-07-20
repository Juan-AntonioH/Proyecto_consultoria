<?php

namespace Daw\DTO;

use JsonSerializable;

class ContactosDTO implements JsonSerializable
{
    /**
     * Summary of __construct
     * @param mixed $id
     * @param string $nombre
     * @param string $email
     * @param string $movil
     * @param string $empresa
     * @param string $mensaje
     * @param bool $deleted
     */
    function __construct(private ?int $id, private string $nombre, private string $email, private string $movil, private string $empresa, private string $mensaje, private ?bool $deleted)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->email = $email;
        $this->movil = $movil;
        $this->empresa = $empresa;
        $this->mensaje = $mensaje;
        $this->deleted = $deleted;
    }
    public function id(): int
    {
        return $this->id;
    }
    public function nombre(): string
    {
        return $this->nombre;
    }
    public function email(): string
    {
        return $this->email;
    }

    public function movil(): string
    {
        return $this->movil;
    }
    public function empresa(): string
    {
        return $this->empresa;
    }
    public function mensaje(): string
    {
        return $this->mensaje;
    }
    public function deleted(): bool
    {
        return $this->deleted;
    }
    /**
     * Especifica los datos que deberían serializarse para JSON
     * Serializa el objeto a un valor que puede ser serializado de forma nativa por json_encode().
     * @return mixed Devuelve los datos que pueden ser serializados por json_encode(), los cuales son un valor de cualquier tipo distinto de `resource`.
     */
    public function jsonSerialize()
    {
        return [
            "id" => $this->id,
            "nombre" => $this->nombre,
            "email" => $this->email,
            "movil" => $this->movil,
            "empresa" => $this->empresa,
            "mensaje" => $this->mensaje,
            "deleted" => $this->deleted
        ];
    }
}
