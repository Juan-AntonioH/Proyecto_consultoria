<?php
namespace Daw\DTO;

use JsonSerializable;

class NewsletterDTO implements JsonSerializable
{

    /**
     * Summary of __construct
     * @param mixed $id
     * @param string $email
     * @param mixed $active
     * @param mixed $deleted
     */
    function __construct(private ?int $id, private string $email, private ?bool $active, private ?bool $deleted)
    {
        $this->id = $id;
        $this->email = $email;
        $this->active = $active;
        $this->deleted = $deleted;
    }
    public function id(): int
    {
        return $this->id;
    }

    public function email(): string
    {
        return $this->email;
    }
    public function active(): bool
    {
        return $this->active;
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
            "email" => $this->email,
            "active" => $this->active,
            "deleted" => $this->deleted
        ];
    }
}
