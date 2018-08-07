---
title: OpenAI Gym Board Games Env for 0.9.6 Above
comments: true
categories:
  - AI
date: 2018-08-06 22:32:53
tags:
  - OpenAI
  - Gym
  - Board Games
  - Go
  - Hex
---

Since Gym 0.9.6, the board games environment has been removed from the default package as they are not maintained by OpenAI [[ref](https://github.com/openai/gym/releases/tag/v0.9.6)].
This article helps who would like to run their AI on Go or Hex in OpenAI Gym.

<!--more-->

1. Locate the python Gym package folder. In my case, it is under `~/anaconda3/envs/openai-gym/lib/python3.5/site-packages/gym`.

2. Download the Gym [0.9.5](https://github.com/openai/gym/archive/v0.9.5.zip) source code which contains the board games environment.

3. Copy the board_game folder from 0.9.5 source code (under `/gym-0.9.5/gym/envs/`) to your local Gym package envrionment folder (my case is `~/anaconda3/envs/openai-gym/lib/python3.5/site-packages/gym/envs`).

4. Add the following code into __init__.py (`~/anaconda3/envs/openai-gym/lib/python3.5/site-packages/gym/envs/__init__.py`). It will register those envs.

```python
# Board games
# ----------------------------------------

register(
    id='Go9x9-v0',
    entry_point='gym.envs.board_game:GoEnv',
    kwargs={
        'player_color': 'black',
        'opponent': 'pachi:uct:_2400',
        'observation_type': 'image3c',
        'illegal_move_mode': 'lose',
        'board_size': 9,
    },
    # The pachi player seems not to be determistic given a fixed seed.
    # (Reproduce by running 'import gym; h = gym.make('Go9x9-v0'); h.seed(1); h.reset(); h.step(15); h.step(16); h.step(17)' a few times.)
    #
    # This is probably due to a computation time limit.
    nondeterministic=True,
)

register(
    id='Go19x19-v0',
    entry_point='gym.envs.board_game:GoEnv',
    kwargs={
        'player_color': 'black',
        'opponent': 'pachi:uct:_2400',
        'observation_type': 'image3c',
        'illegal_move_mode': 'lose',
        'board_size': 19,
    },
    nondeterministic=True,
)

register(
    id='Hex9x9-v0',
    entry_point='gym.envs.board_game:HexEnv',
    kwargs={
        'player_color': 'black',
        'opponent': 'random',
        'observation_type': 'numpy3c',
        'illegal_move_mode': 'lose',
        'board_size': 9,
    },
)
```

All in all, Gym is built for testing reinforcement learning, and the reinforcement learning gains fames from the DeepMind AlphaGo. 
Personally, removing Go env from Gym is not a smart move for marketing.
