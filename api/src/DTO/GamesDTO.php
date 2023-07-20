<?php

namespace Daw\DTO;

use JsonSerializable;

class GamesDTO implements JsonSerializable
{
    function __construct(private ?int $id, private string $title, private int $year, private int $develop_id)
    {
        $this->id = $id;
        $this->title = $title;
        $this->year = $year;
        $this->develop_id = $develop_id;
    }
    public function id(): int
    {
        return $this->id;
    }
    public function title(): string
    {
        return $this->title;
    }
    public function year(): int
    {
        return $this->year;
    }

    public function develop_id(): int
    {
        return $this->develop_id;
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
            "title" => $this->title,
            "year" => $this->year,
            "develop_id" => $this->develop_id,
        ];
    }
}
