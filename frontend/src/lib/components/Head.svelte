<div class="head">
    <div class="logo">
        <div class="icon">
            <img src="/favicon.png" alt="">
        </div>
    
        <div class="label">
            Educatic
        </div>
    </div>

    <div class="create-assignment">
        <button>Add Assignment</button>
    </div>
</div>

<style lang="scss">
    .head {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;

        margin-bottom: 12px;
    }

    div.logo {
        height: 70px;

        margin-top: 12px;
        margin-left: 16px;

        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .icon {
        height: 70px;
        width: 70px;

        //background-color: #ffffff;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 80%;
        }
    }

    .label {
        font-family: "Kanit";
        font-size: 30px;
        font-weight: 700;

        margin-left: 0.5em;

        color: #ffffff;
        text-shadow: 0px 0px 8px #00000044;
    }

    div.create-assignment {
        height: 70px;

        margin-top: 12px;
        margin-right: 16px;

        display: flex;
        flex-direction: row;
        align-items: center;

        button {
            font-family: "Inter";
            font-size: 16px;
            font-weight: 800;
            color: #ffffff;

            background: rgb(32,116,218);
            background: linear-gradient(142deg, rgba(32,116,218,1) 0%, rgba(111,84,255,1) 100%); 
            border: none;
            border-radius: 0.3em;

            padding: 0.5em 1.2em;

            transition: 0.4s;

            -webkit-user-select: none;   
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    }
</style>