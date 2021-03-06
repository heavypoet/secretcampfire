<img src="public/media/logoLight.png" height="60">

# secret campfire 
![version](https://img.shields.io/badge/version-1.1.0-blue.svg?style=for-the-badge)

`secret campfire` is a free tumblr replacement with a few twists:
- Post anything you want
- Your blogs belong 100% to you
- Your blogs live forever and no one can shut them down 

## How to get an official *secret campfire* blog

For an official blog on `secretcampfire.com`, email [getscampy@secretcampfire.com](mailto:getscampy@secretcampfire.com). We'll set up your blog for $5 and take care of everything for you. After it's set up, your blog is free for life. Hurry before your favorite blog name gets taken by someone else.

## How to set up your own free *secret campfire* blog

If you are the DIY type, you can follow the steps below to set up your free `secret campfire` blog by yourself:

1. Click <a href="https://heroku.com/deploy" target="_blank" title="Deploy"><img src="https://www.herokucdn.com/deploy/button.png"></a>

2. Make a new Heroku account if you don't have one yet (it's free). Sign in.

3. Enter a name for your app. This name will become your blog's address. E.g., if you enter `scampy` your blog's address will be `scampy.herokuapp.com`. Click `Deploy app`. Wait for it to finish. When it's done, you'll see `Your app was successfully deployed` at the bottom.

4. Click on your account button at the top right of the page and go to `Account settings`. 

5. Click the `Billing` tab and click `Add credit card` to add a credit card. This boosts your account's free quota to 1000 hours a month and lets you one-click install your blog's database in the next steps. Don't worry, your card will not be charged ([more info here](docs/FAQ.md#why-do-i-need-to-provide-my-credit-card-to-heroku-if-its-100-free)).

6. Go back to <a href="https://dashboard.heroku.com" target="_blank">dashboard.heroku.com</a> and select your app.

7. Click the `Resources` tab at the top.

8. In the `Add-ons` search bar, type `mlab` and select `mLab MongoDB`. This database stores your blog's content. Select the `Sandbox - Free` plan and click `Provision`.

9. Visit `your-app.herokuapp.com` in a browser (where `your-app` is the name you entered in Step 3). 

10. You'll see a welcome message that says "Congratulations! Your secret campfire blog is alive!" Follow the instructions there to set your password and secure your blog. 
  
## 

![secretcampfire](public/media/glowingForest.jpg)

## Prologue

Once upon a time, most websites on the Internet were owned by the people. Humble individuals. Mom, pop, brother and sister. You and me. But that time is long gone. Today, most websites and publishing platforms lie in the fat claws of a few big corporations. 

When someone else controls your data, they have power over you. They can hold you hostage, control what you say and strangle your voice anytime what you say does not agree with their business agenda. And so today, more than ever, our freedom is in danger.

That's why `secret campfire` was created on January 2019 to replace tumblr. Because as you've already noticed, there just aren't any good options out there. And we're tired of rolling the dice and investing in yet another *flavor-of-the-month* platform... only to have them betray us or crap out later.  

With `secret campfire`, you can finally set up your forever home online. It belongs to you and you alone. No one can tell you what you can or can't do with it. And no one can shut you down. 

Enjoy the 'fire and share the love: http://secretcampfire.com

## How is *secret campfire* different?


| <img src="docs/media/old-way.png" alt="Evil way">  | <img src="docs/media/new-way.png" alt="secret campfire way"> |
| -------------------------------------------------- | ------------------------------------------------------------ |
| **Old way:** you make an account on their site... then they own your account and you're locked in. Which means they can shut you down and delete your account anytime they feel like it. | **`secret campfire`** way: your blog is 100% yours and you connect to other blogs in the `secret campfire` network directly. You're free to express yourself, your blogs live forever and no one can shut you down. |

## Features

`secret campfire` is an immortal personal microblogging system that...
- supports tumblr features like `reblog`, `follow`, `queued posting` and an infinite-scroll `dashboard` feed
- runs in the cloud using 100% free (but industry-grade) components, so:
  - it costs you nothing to run your blog 24/7 forever 
  - you don't even need a computer to set it up or run it
- can never be killed, because you own and control:
  - your blog
  - your blog's content 
  - your blog's social network
- is open-source, so you may customize it to your heart's content
- can run on any platform you like, so you are never locked into one service
- is *free* as in *free*dom

### Frequently asked questions

See [FAQ](docs/FAQ.md)

### How to upgrade your blog + stay synced to the latest official version

See [UPGRADING](docs/UPGRADING.md)

### Secret goodies + hidden features

See [ADVANCED](docs/ADVANCED.md)
