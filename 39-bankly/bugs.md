1. The Error message to register without all required fields is incomplete
2. Doesn't reject an incorrect password -- add `await` to login route
3. Get all users route returns senstive info on users.
4. Won't patch user unless admin. User should be able to patch their own info
5. After fixing Bug #4, user can change their admin status
6. authUser middleware function uses jwt.decode which is insecure -- switch to jwt.verify
    - not sure how i would test this
