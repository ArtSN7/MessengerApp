export default function error_check(statusCode, errorMessage) {

    if (statusCode === 401) { // redirect to the error page
        return false;
    }

    if (statusCode === 400) { // 400 means that i need to show the error message
        return false;
    }

    if (statusCode === 333) { // 333 smth terrible
        return true;
    }

    return false;
    
}