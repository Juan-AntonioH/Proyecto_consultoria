<?php

namespace App\Http\Controllers\Api;

use App\Models\Game;


use Daw\DTO\GamesDTO;
use Daw\Service\GameService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Daw\Service\impl\GameServiceImpl;

class GameController extends Controller
{
    // private GameService $service;
    function __construct()
    {
        // $this->service = new GameServiceImpl();
        $this->middleware(
            'auth:sanctum',
            ['except' => ['index', 'show','developGames']]
        );
        //     $this->middleware(
        //     'rol:admin',
        //     ['only' => ['index']]
        // );


        // $this->middleware(
        //     ['auth:sanctum',
        //     ['except' => ['index', 'show']],            'rol:admin',
        //     ['only' => ['index']]]
        // );

    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json("hola",200);
    //   return  response()->json(Game::get(),200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $game = new GamesDTO(
        //     null,
        //     $request->title,
        //     $request->year,
        //     $request->develop_id
        // );
        // return response()->json($this->service->insert($game), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // return response()->json($this->service->find($id),200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        // $game = new GamesDTO(
        //     null,
        //     $request->title,
        //     $request->year,
        //     $request->develop_id
        // );
        // return response()->json($this->service->update($game,$id), 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // return response()->json($this->service->delete($id));
    }

    public function developGames($id){
        // return response()->json($this->service->developGames($id));
    }
}
