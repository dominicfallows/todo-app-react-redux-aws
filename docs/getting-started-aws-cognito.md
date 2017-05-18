### Todo App (React + Redux + AWS) Documentation
[Main Repo / Code](https://dominicfallows.github.io/todo-app-react-redux-aws/) &nbsp;&nbsp;&nbsp;&nbsp; [Getting Started](https://dominicfallows.github.io/todo-app-react-redux-aws/docs/getting-started.md)

# Getting Started - Authentication with AWS Cognito
This app uses [AWS Cognito](https://aws.amazon.com/cognito/) as its authentication system. Cognito handles:

- Sign-up
- Sign-in (with Username/Password or Social)
- Forgot Password

And, although out of scope for this example app:

- Multi-Factor Authentication (MFA)
- User Pools and User Groups
- Role ACLs (Fine-Grained Role-Based Access Control)

### Prepare AWS Cognito

First, Login to [AWS Console](https://aws.amazon.com/console/) and go to Cognito.

#### User Pools

To enable sign-up and sign-in to our app using a username and password, we need to create a User Pool. 

   A User Pool is a set of users that operate in a similar way. 
   
   For example, if you were creating an app for a school, then you might have two User Pools, one for Teachers and one for students. 
   
   Each of those pools can then have groups with different permissions (for example students in different classes).
   
   Keeping fundamentally similar users in their own pools, further organised into groups, gives you further control. 
   
   For this example app, we just need a simple single User Pool.

1. Click **Manage Your User Pools** - this is where you see your User Pools listed. 

2. Click **Create a User Pool**

3. Enter a name in **Pool name**, for example: *Todo_Standard_Users*

4. Click **Step through settings**

5. Choose which **Standard Attributes** each user in this pool requires. We'll keep it simple here, just choose: *email*
   
  Click **Next step**
   
6. Choose **Password Strength** settings, we'll leave it as default for this app

7. Choose **Sign-up** permissions, we'll stick with: *Allow users to sign themselves up*

8. Choose **Expiry** settings - which is how long it is until a user account created is deleted if not used (confirmed, first sign-in, etc)

  Click **Next step**

9. Choose **Multi-Factor Authentication** settings, we'll keep this off for this example

10. Choose **Verification** settings, we'll keep it with: *Email*

11. Choose a name for the **SMS Role**, which is used for verification messages. A suggested name will be entered for you, click **Create Role**

  Click **Next step**

12. Update the **Email and SMS Verification** messages, if needed. You can do this later.

13. Choose whether emails should come from your own email address, you can do this later.

  Click **Next step**

14. Add **Tags** if needed

  Click **Next step**

15. Choose whether the pool should **Remember User's Devices**. We'll not go into that in this example, so keep it selected as *No*

  Click **Next step**

16. Choose which **app clients** have access to this pool, for example: *TodoApp* 

      - Click **Add an app client**

      - Fill the form in as below:
      
          - App client name, for example: *TodoApp*
          - Refresh token expiry (days): *30*
          - Generate client secret: *UN-CHECKED* 
     
              **IMPORTANT**: as our app is a JavaScript front-end app, we cannot use *secrets*
       
          - Enable sign-in API for server-based authentication: *UN-CHECKED*
          - Only allow Custom Authentication: *UN-CHECKED*
        
        - Click **Create app client**

  Click **Next step**

17. We could customise workflows with triggers here, for this example, Click **Next step**

18. Review the settings and click **Create pool**

19. You should see a message, something like: *Your user pool was created successfully.*

20. Take a note of your **Pool Id** and the **Pool ARN** as we'll need them in the next steps.
      
  Also, take a note of the **App client Id**, as we'll also need that, by clicking on App clients in the left-hand menu

#### Federated Identities

Now that we have a User Pool, we need to create a Federated Identity Pool. 

A Federated Identity Pool enables us to create unique identities for users and centralise authentication from identity providers.

Our first Identity Provider is Cognito and our User Pool.

We could also have a Social Identity Provider (Facebook, Twitter, etc). 

1. Goto **Federated Identities** in the Cognito menu

2. Click **Create new identity pool**

3. Enter an **Identity pool name**, for example: *Todo_Standard_Users*

4. Expand **Authentication providers** click on **Cognito** tab and enter our **User Pool ID** and **App Client ID** (from above).

  Click **Create pool**
  
5. Now we need to create IAM roles for our identity pool. Each role should let you choose **Create a new IAM Role** and suggest names for you.

  Click **Allow**
  
6. You should now be shown some sample code. You need to take a note of the generated **Identity Pool ID**. This is a little trickier as it, for some reason, is only shown in the sample code blocks. 

 The line should look something like: 
  
  *"eu-west-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Identity Pool ID* 
  
  Have a look for the red highlighted string (in "double quotes") and take a note, this is your **Identity Pool ID**, for example: 
  
  *eu-west-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx* 
  
